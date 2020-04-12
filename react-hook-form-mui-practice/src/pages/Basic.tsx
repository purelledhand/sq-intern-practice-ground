import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  MenuItem,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& input, & select': {
      width: 300,
    },
  },
  button: {
    width: 300,
    marginTop: 20,
  },
});

const companies = [
  {
    value: 'squarelab',
    label: 'Squarelab',
  },
  {
    value: 'kakao',
    label: 'Kakao',
  },
  {
    value: 'estar',
    label: 'Estar',
  },
  {
    value: 'airseoul',
    label: 'Airseoul',
  },
];


const Basic: React.FC = () => {
  const { handleSubmit } = useForm();
  const classes = useStyles();
  const [company, setCompany] = React.useState('squarelab');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const onSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="username"
        label="username"
        type="name"
        required
      />

      <TextField
        name="password"
        label="password"
        type="password"
        required
      />

      <TextField
        name="company"
        label="company"
        select
        value={company}
        onChange={handleChange}
        required
      >
        {companies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button className={classes.button} type="submit" color="primary">Submit</Button>
    </form>
  );
};

export default Basic;
