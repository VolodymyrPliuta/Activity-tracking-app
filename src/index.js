import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
  <SkiDayList days={
    [
      {
        resort: "Silicon Valley",
        date: new Date("7/8/2018"),
        powder: true,
        backcountry: false
      },
      {
        resort: "Krirwood",
        date: new Date("5/8/2018"),
        powder: false,
        backcountry: false
      },
      {
        resort: "Mt. Tallac",
        date: new Date("2/6/2018"),
        powder: true,
        backcountry: true
      }
    ]
  } />,
	document.getElementById('react-container')
)