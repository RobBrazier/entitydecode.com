package main

import (
	"entitydecode/internal/server"
	"fmt"
)

func main() {

	app := server.NewServer()

	err := app.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
