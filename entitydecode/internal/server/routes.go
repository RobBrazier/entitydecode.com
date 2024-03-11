package server

import (
	"entitydecode/internal/components"
	"entitydecode/internal/pages"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"path/filepath"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func mountAssetsHandler(r chi.Router) {
	workDir, _ := os.Getwd()
	assetsDir := os.Getenv("ASSETS_DIR")
	if assetsDir == "" {
		assetsDir = "assets"
	}
	fs := http.FileServer(http.Dir(filepath.Join(workDir, assetsDir)))
	r.Group(func(mux chi.Router) {
		mux.Use(middleware.SetHeader("Cache-Control", "public, max-age=3600, must-revalidate"))
		mux.Handle("/assets/*", http.StripPrefix("/assets/", fs))
	})
}

func (s *Server) RegisterRoutes() http.Handler {

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", s.rootHandler)
	mountAssetsHandler(r)

	host, _ := url.Parse("https://plausible.io")
	proxy := &httputil.ReverseProxy{
		Rewrite: func(r *httputil.ProxyRequest) {
			r.SetURL(host)
			r.Out.Host = host.Host
		},
	}
	r.Post("/api/event", proxy.ServeHTTP)

	return r
}

func (s *Server) rootHandler(w http.ResponseWriter, r *http.Request) {
	page := pages.Index()
	component := components.Layout(page)
	component.Render(r.Context(), w)
}
