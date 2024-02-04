import "./Field.css";

interface FieldProps {
  id: string
  label: string
  placeholder: string
  value: () => string
  setValue: (value: string) => void
}

export default function Field(props: {
  id: string
  label: string
  placeholder: string
  value: () => string
  setValue: (value: string) => void
}) {
  const { id, placeholder, label, value, setValue } = props;
  return (
    <div class="field">
      <label for={id} class="label">{label}:</label>
      <div class="control">
        <textarea class="textarea" id={id} placeholder={placeholder} value={value()}onInput={(event) => setValue(event.target.value)}/>
      </div>
    </div>
  );
}
