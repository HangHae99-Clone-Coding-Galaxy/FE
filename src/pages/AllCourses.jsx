import React from 'react'
import Git from '../components/courses/Git'
import HtmlCss from '../components/courses/HtmlCss'
import JavaScriptEs6 from '../components/courses/JavaScriptEs6'
import JavaScriptJQuery from '../components/courses/JavaScriptJQuery'
import NodeJsMongoDB from '../components/courses/NodeJsMongoDB'
import ReactBasic from '../components/courses/ReactBasic'

export default function AllCourses() {
  return (
    <div>
      <Git/>
      <HtmlCss/>
      <JavaScriptEs6/>
      <JavaScriptJQuery/>
      <NodeJsMongoDB/>
      <ReactBasic/>
    </div>
  )
}
