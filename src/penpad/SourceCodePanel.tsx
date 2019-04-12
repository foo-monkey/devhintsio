import React from 'react'
import CSS from './SourceCodePanel.module.css'
import Util from './utils.module.css'
import cn from 'classnames'
import toString from 'jsx-to-string'

interface Props {
  view: React.ReactNode
}

const SourceCodePanel = (props: Props) => {
  const { view } = props
  const code = toString(view())

  return (
    <div className={CSS.root}>
      <div className={CSS.header}>
        <h3 className={CSS.title}>Source code</h3>
      </div>
      <div className={CSS.body}>
        <textarea className={cn(Util.textarea)}>{code}</textarea>
      </div>
    </div>
  )
}

export default SourceCodePanel
