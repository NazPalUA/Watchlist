import { useState } from "react"
import guestIcon from "../../../../assets/images/guest_icon.svg"
import selectAvatarIcon from "../../../../assets/images/selectAvatarIcon.svg"
import { useUser } from "../../../../context/UserContext"
import style from "./CustomForm.module.scss"

type CustomFormProps = {}

export default function CustomForm({}: CustomFormProps) {
  let { user } = useUser()
  // State for the image source
  const [imageSrc, setImageSrc] = useState(user?.photoUrl || guestIcon)

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get("email") as string
    let password = formData.get("password") as string
    let confirmPassword = formData.get("confirmPassword") as string
    let avatar = imageSrc
    console.log(
      `Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Avatar: ${avatar}`
    )
  }
  return (
    <form onSubmit={handleSubmit}>
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
          <label className={style.textLabel} htmlFor="email">
            Email
          </label>
          <input
            className={style.textInput}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className={style.formGroup}>
          <label className={style.textLabel} htmlFor="password">
            Password
          </label>
          <input
            className={style.textInput}
            type="password"
            id="password"
            name="password"
          />
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
        <button className={style.submitBtn} type="submit">
          Update Profile
        </button>
      </div>
    </form>
  )
}
