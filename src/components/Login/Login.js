import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { logInClosed } from "../../redux/actions/login";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [logInForm, setLogInForm] = useState({});
  const { openLoginModal } = useSelector((state) => state.login);
  const onChange = (e) => {
    setLogInForm({
      ...logInForm,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div>
      <Dialog
        open={openLoginModal}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <TextField
            onChange={onChange}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            onChange={onChange}
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogContent>Forgot Password?</DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(logInClosed())} color="primary">
            Cancel
          </Button>
          <Button onClick={() => console.log(logInForm)} color="primary">
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
