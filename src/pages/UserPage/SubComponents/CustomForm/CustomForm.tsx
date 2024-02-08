import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import guestIcon from "../../../../assets/images/guest_icon.svg"
import selectAvatarIcon from "../../../../assets/images/selectAvatarIcon.svg"
import style from "./CustomForm.module.scss"

type CustomFormProps = {}

export default function CustomForm({}: CustomFormProps) {
  // Get the action and user ID from the search params
  const [searchParams] = useSearchParams()
  const action = searchParams?.get("action") as "create" | "update"
  const userId = searchParams?.get("id")

  // State for the image source
  const [imageSrc, setImageSrc] = useState(guestIcon)

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Add form submission logic here
  }
  return (
    <form>
      <div className={style.form}>
        <div className={style.avatarContainer}>
          <img className={style.avatar} src={imageSrc} alt="avatar" />
          <input
            className={style.fileInput}
            type="file"
            id="avatar"
            onChange={handleImageChange}
          />
          <label className={style.avatarLabel} htmlFor="avatar">
            <img src={selectAvatarIcon} alt="select avatar" />
            {imageSrc === guestIcon ? "Upload new photo" : "Change photo"}
          </label>
        </div>
        <div className={style.formGroup}>
          <label className={style.textLabel} htmlFor="name">
            Name
          </label>
          <input className={style.textInput} type="text" id="name" />
        </div>
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
        <div className={style.formGroup}>
          <label className={style.textLabel} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={style.textInput}
            type="password"
            id="confirmPassword"
          />
        </div>
        <button
          className={style.submitBtn}
          type="submit"
          onSubmit={handleSubmit}
        >
          {action === "create"
            ? "Create Profile"
            : action === "update"
            ? "Update Profile"
            : null}
        </button>
      </div>
    </form>
  )
}
