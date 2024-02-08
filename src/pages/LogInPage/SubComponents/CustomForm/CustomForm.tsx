import style from "./CustomForm.module.scss"

type CustomFormProps = {}

export default function CustomForm({}: CustomFormProps) {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Add form submission logic here
  }
  return (
    <form>
      <div className={style.form}>
        <div className={style.formGroup}>
          <label className={style.textLabel} htmlFor="email">
            Email
          </label>
          <input className={style.textInput} type="email" id="email" />
        </div>
        <div className={style.formGroup}>
          <label className={style.textLabel} htmlFor="password">
            Password
          </label>
          <input className={style.textInput} type="password" id="password" />
        </div>

        <button
          className={style.submitBtn}
          type="submit"
          onSubmit={handleSubmit}
        >
          Log In
        </button>
      </div>
    </form>
  )
}
