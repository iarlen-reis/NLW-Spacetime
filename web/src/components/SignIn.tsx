import { User } from 'lucide-react'

const SignIn = () => {
  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <User className="h-5 w-5 text-gray-400" />
        </div>
        <p className="max-w-[140px] text-sm leading-snug">
          <span className="underline">Crie sua conta</span> e salve suas
          memórias!
        </p>
      </a>
    </div>
  )
}

export default SignIn
