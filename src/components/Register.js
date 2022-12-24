import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "firebase";
import '../App.css';
import { auth } from "../firebase"

export default function Register() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const user = app.auth().currentUser;

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/Dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <a href="#register-form" className="link-primary block mb-10 font-medium">Register</a>
        <div id="register-form" class="modal">
          <div class="modal-box bg-neutral-content">
            <h2 className="text-primary font-bold text-3xl mb-2">Sign Up</h2>
            {error && <alert variant="danger" className="text-error font-semibold">{error}</alert>}
            <form onSubmit={handleSubmit}>
              <div id="email" class="form-control">
                <label class="label">
                  <span class="label-text text-black">Email</span>
                </label>
                <input placeholder="email" class="text-black input input-bordered input-primary bg-neutral-content" type="email" ref={emailRef} required />
              </div>
              <div id="password" class="form-control">
                <label class="label">
                  <span class="label-text text-black">Password</span>
                </label>
                <input placeholder="password" class="text-black input input-bordered input-primary bg-neutral-content" type="password" ref={passwordRef} required />
              </div>
              <div id="password-confirm" class="form-control">
                <label class="label">
                  <span class="label-text text-black">Password Confirmation</span>
                </label>
                <input placeholder="confirm password" class="text-black input input-bordered input-primary bg-neutral-content" type="password" ref={passwordConfirmRef} required />
              </div>
              <div class="modal-action" >
                <button class="btn btn-primary" disabled={loading} type="submit">
                  Register
                </button>
                <a href="/#" class="btn btn-primary" >Close</a>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}