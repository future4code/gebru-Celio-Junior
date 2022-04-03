export const goHome = navigate => {
  navigate('/')
}

export const goTripsList = navigate => {
  navigate('/trips/list')
}

export const goLogin = navigate => {
  navigate('/login')
}

export const goApplicationForm = navigate => {
  navigate('/trips/application')
}

export const goAdminHome = navigate => {
  navigate('/admin/trips/list')
}

export const goTripDetails = navigate => {
  navigate('/admin/trips/:id')
}

export const goAdminCreateTrip = navigate => {
  navigate('/admin/trips/create')
}

export const goBack = navigate => {
  navigate(-1)
}
