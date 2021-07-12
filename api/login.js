import axios from './userAxios'

// 登入
export const handleSignUp = ({ email, password }) => axios.signUpPost({ email, password })
export const handleSignIn = ({ email, password }) => axios.signInPost({ email, password })
