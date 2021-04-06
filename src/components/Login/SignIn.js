import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Checkbox from "@material-ui/core/Checkbox";
import DialogTitle from "@material-ui/core/DialogTitle";
import { signOnClosed } from '../../redux/actions/login';
import { useSelector, useDispatch } from "react-redux";

function SignIn() {
    const dispatch = useDispatch()
  const [signInForm, setSignInForm] = useState({}) 
  const { openSignInModal } = useSelector((state) => state.login);
  const onChange = (e) => {
    setSignInForm({
        ...signInForm,
        [e.target.id]: e.target.value,
    })
  };
  return (
    <div>
      <Dialog
        open={openSignInModal}
        aria-labelledby="form-dialog-title"
        fullWidth
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
        <DialogContent>
          <Checkbox
            checked={true}
            inputProps={{ "aria-label": "primary checkbox" }}
          />{" "}
          I agree to the Terms & Conditions and Privacy policy
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(signOnClosed())} color="primary">Cancel</Button>
          <Button onClick={() => console.log(signInForm)} color="primary">Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignIn;
