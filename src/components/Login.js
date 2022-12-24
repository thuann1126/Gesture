import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../index.css";
import app from "../firebase";


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const userid = Math.floor(Math.random() * 101);

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }



  return (
    <>
      <div>
        <a href="#login-form" className="btn btn-accent btn-wide mb-2 font-bold" >Login</a>
        <div id="login-form" class="modal">
          <div class="modal-box bg-neutral-content">
            <h2 className="text-primary font-bold text-3xl mb-2" >Login</h2>
            {error && <alert variant="danger" className="text-error font-semibold">{error}</alert>}
            <form onSubmit={handleSubmit}>
              <div id="email" class="form-control">
                <label class="label">
                  <label class="label-text text-black">Email</label> <br />
                </label>
                <input placeholder="email" class="input input-bordered input-primary bg-neutral-content text-black" type="email" ref={emailRef} required />
              </div>
              <div id="password" class="form-control">
                <label class="label">
                  <label class="label-text text-black" >Password</label>
                </label>
                <input placeholder="password" class="input input-bordered input-primary mb-4 bg-neutral-content text-black" type="password" ref={passwordRef} required />
              </div>
              <Link to="/forgot-password" className="text-primary">Forgot Password?</Link>
              <div class="modal-action">
                <button class="btn btn-primary" disabled={loading} variant="warning" type="submit">
                  Login
                </button>
                <a href="/#" class="btn btn-primary">Close</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
