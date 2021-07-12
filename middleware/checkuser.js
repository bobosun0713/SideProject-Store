export default function ({ store, redirect }) {
  if (store.state.login.isLogin) {
    return redirect('/')
  }
}
