import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom";
import '../App.css';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your email's inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div class="hero min-h-screen bg-base-content">
        <div class="modal-box App bg-neutral-content">
          <h2 className="text-primary font-bold text-3xl">Password Reset</h2>     
          <form onSubmit={handleSubmit}>
            <div id="email" class="form-control">
              <label class="label">
              <label class="label-text text-black">Email</label><br/>
              </label>
              <input class="input input-bordered input-primary mb-4 bg-neutral-content text-black" type="email" ref={emailRef} required />
              {error && <alert variant="danger" class="text-error font-semibold">{error}</alert>}
              {message && <alert variant="success" class="text-success font-semibold">{message}</alert>}     
            </div>
            <div class="modal-action">
              <button className="btn btn-primary" disabled={loading} type="submit">
                Reset Password
              </button>
              <a href="/" class="btn btn-primary">Close</a>
            </div>
          </form>
          <div className="link text-primary mt-6">
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}
