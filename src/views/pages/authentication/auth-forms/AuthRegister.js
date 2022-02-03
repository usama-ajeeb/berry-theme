import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'

// third party
import * as Yup from 'yup'
import { Formik } from 'formik'

// project imports
// import useScriptRef from 'hooks/useScriptRef'
import Google from 'assets/images/icons/social-google.svg'
import AnimateButton from '../../../../components/extended/AnimateButton'
// import { strengthColor, strengthIndicator } from 'utils/password-strength'

// assets
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import value from 'assets/scss/_themes-vars.module.scss'

/**
 * Password validator for login pages
 */

// has number
const hasNumber = (number) => new RegExp(/[0-9]/).test(number)

// has mix of small and capitals
const hasMixed = (number) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number)

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number)

// set color based on password strength
export const strengthColor = (count) => {
  if (count < 2) return { label: 'Poor', color: value.errorMain }
  if (count < 3) return { label: 'Weak', color: value.warningDark }
  if (count < 4) return { label: 'Normal', color: value.orangeMain }
  if (count < 5) return { label: 'Good', color: value.successMain }
  if (count < 6) return { label: 'Strong', color: value.successDark }
  return { label: 'Poor', color: value.errorMain }
}

// password strength indicator
export const strengthIndicator = (number) => {
  let strengths = 0
  if (number.length > 5) strengths += 1
  if (number.length > 7) strengths += 1
  if (hasNumber(number)) strengths += 1
  if (hasSpecial(number)) strengths += 1
  if (hasMixed(number)) strengths += 1
  return strengths
}

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme()
  const scriptedRef = useRef(true)
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
  //   const customization = useSelector((state) => state.customization)
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(true)

  const [strength, setStrength] = useState(0)
  const [level, setLevel] = useState()

  const googleHandler = async () => {
    console.error('Register')
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const changePassword = (value) => {
    const temp = strengthIndicator(value)
    setStrength(temp)
    setLevel(strengthColor(temp))
  }

  useEffect(() => {
    changePassword('123456')
    scriptedRef.current = false
  }, [])

  return (
    <>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant='outlined'
              fullWidth
              onClick={googleHandler}
              size='large'
              sx={{
                color: 'grey.700',
                backgroundColor: '#fafafa',
                borderColor: '#f5f5f5',
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src={Google}
                  alt='google'
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
            <Button
              variant='outlined'
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${'#f5f5f5'} !important`,
                color: `${'#212121'}!important`,
                fontWeight: 500,
                borderRadius: `${12}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems='center'
          justifyContent='center'
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant='subtitle1'>
              Sign up with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true })
              setSubmitting(false)
            }
          } catch (err) {
            console.error(err)
            if (scriptedRef.current) {
              setStatus({ success: false })
              setErrors({ submit: err.message })
              setSubmitting(false)
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='First Name'
                  margin='normal'
                  name='fname'
                  type='text'
                  defaultValue=''
                  sx={{
                    marginTop: 1,
                    marginBottom: 1,
                    '& > label': {
                      top: 23,
                      left: 0,
                      color: theme.grey500,
                      '&[data-shrink="false"]': {
                        top: 5,
                      },
                    },
                    '& > div > input': {
                      padding: '30.5px 14px 11.5px !important',
                    },
                    '& legend': {
                      display: 'none',
                    },
                    '& fieldset': {
                      top: 0,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Last Name'
                  margin='normal'
                  name='lname'
                  type='text'
                  defaultValue=''
                  sx={{
                    marginTop: 1,
                    marginBottom: 1,
                    '& > label': {
                      top: 23,
                      left: 0,
                      color: theme.grey500,
                      '&[data-shrink="false"]': {
                        top: 5,
                      },
                    },
                    '& > div > input': {
                      padding: '30.5px 14px 11.5px !important',
                    },
                    '& legend': {
                      display: 'none',
                    },
                    '& fieldset': {
                      top: 0,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{
                marginTop: 1,
                marginBottom: 1,
                '& > label': {
                  top: 23,
                  left: 0,
                  color: theme.grey500,
                  '&[data-shrink="false"]': {
                    top: 5,
                  },
                },
                '& > div > input': {
                  padding: '30.5px 14px 11.5px !important',
                },
                '& legend': {
                  display: 'none',
                },
                '& fieldset': {
                  top: 0,
                },
              }}
            >
              <InputLabel htmlFor='outlined-adornment-email-register'>
                Email Address / Username
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-email-register'
                type='email'
                value={values.email}
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text--register'
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{
                marginTop: 1,
                marginBottom: 1,
                '& > label': {
                  top: 23,
                  left: 0,
                  color: theme.grey500,
                  '&[data-shrink="false"]': {
                    top: 5,
                  },
                },
                '& > div > input': {
                  padding: '30.5px 14px 11.5px !important',
                },
                '& legend': {
                  display: 'none',
                },
                '& fieldset': {
                  top: 0,
                },
              }}
            >
              <InputLabel htmlFor='outlined-adornment-password-register'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password-register'
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name='password'
                label='Password'
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e)
                  changePassword(e.target.value)
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      size='large'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text-password-register'
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                      <Box
                        style={{ backgroundColor: level?.color }}
                        sx={{ width: 85, height: 8, borderRadius: '7px' }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' fontSize='0.75rem'>
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems='center' justifyContent='space-between'>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name='checked'
                      color='primary'
                    />
                  }
                  label={
                    <Typography variant='subtitle1'>
                      Agree with &nbsp;
                      <Typography variant='subtitle1' component={Link} to='#'>
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  color='secondary'
                >
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  )
}

export default FirebaseRegister
