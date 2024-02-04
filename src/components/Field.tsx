export default function Field(props: {
  id: string;
  label: string;
  placeholder: string;
  value: () => string;
  setValue: (value: string) => void;
}) {
  const { id, placeholder, label, value, setValue } = props;
  return (
    <label for={id} class="form-control w-full">
      <div class="label font-bold">{label}:</div>
      <textarea
        class="input input-bordered w-full min-h-52"
        id={id}
        placeholder={placeholder}
        value={value()}
        onInput={(event) => setValue(event.target.value)}
      />
    </label>
  );
}
