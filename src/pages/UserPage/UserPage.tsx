import { UserSettings } from "../../widgets/UserSettings"

type UserPageProps = { className?: string }

export default function UserPage({ className = "" }: UserPageProps) {
  return (
    <div className={className}>
      <UserSettings />
    </div>
  )
}
