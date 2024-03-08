import { yupResolver } from "@hookform/resolvers/yup"
import { doc, updateDoc } from "firebase/firestore"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import InputGroup from "../../../../components/UserAuth/SubComponents/InputGroup/InputGroup"
import { useUser } from "../../../../context/UserContext"
import { db } from "../../../../services/firebase/firebase-config"
import style from "./EditUserForm.module.scss"

type EditUserFormProps = {}

export type UserDataType = {
  name: string
}

const schema = yup.object({
  name: yup.string().required("Name is required"),
})

export default function EditUserForm({}: EditUserFormProps) {
  const { user, setUser } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name || "",
    },
  })

  // Handle form submission
  const onSubmit: SubmitHandler<UserDataType> = async (data) => {
    if (user?.uid) {
      try {
        const docRef = doc(db, "users", user.uid)
        await updateDoc(docRef, {
          name: data.name,
        })
        // Update the user context with the new name
        setUser({
          ...user,
          name: data.name,
        })
      } catch (error) {
        console.error("Error updating document: ", error)
      }
    } else {
      console.error("No user found")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form}>
        <InputGroup
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <button className={style.submitBtn} type="submit">
          Update Profile
        </button>
      </div>
    </form>
  )
}
