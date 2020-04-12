import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& input': {
      width: 300,
    },
  },
  button: {
    width: 300,
    marginTop: 20,
  },
});

const Auth: React.FC = () => {
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();

  const onSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="email"
        label="Standard"
        inputRef={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && errors.email.message}

      <TextField
        label="password"
        type="password"
      />

      <Button className={classes.button} type="submit" color="primary">Submit</Button>
    </form>
  );
};

export default Auth;
