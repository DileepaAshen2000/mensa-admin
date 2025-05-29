'use client';

import * as React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../lib/firebase/firebase-config'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Unstable_Grid2';

export function AccountDetailsForm(): React.JSX.Element {
  const [user, setUser] = React.useState({
    uid: '',
    email: '',
    fullname: '',
    role: '',
    createdAt: '',
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const uid = firebaseUser.uid;
        try {
          const res = await fetch(`http://localhost:8000/api/users/${uid}`);
          const json = await res.json();
          const data = json.data;

          const createdDate = new Date(data.createdAt._seconds * 1000);

          setUser({
            uid: data.uid || '',
            email: data.email || '',
            fullname: data.fullname || '',
            role: data.role || '',
            createdAt: createdDate.toLocaleString(),
          });
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      } else {
        console.warn('No user is signed in.');
      }
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card>
        <CardHeader subheader="Mensa Admin Profile" title="User Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>Reference No : </InputLabel>
                <OutlinedInput notched readOnly value={user.uid} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>Email</InputLabel>
                <OutlinedInput notched readOnly value={user.email} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>Full Name</InputLabel>
                <OutlinedInput notched readOnly value={user.fullname} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>Role</InputLabel>
                <OutlinedInput notched readOnly value={user.role} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink>Created At</InputLabel>
                <OutlinedInput notched readOnly value={user.createdAt} />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
}
