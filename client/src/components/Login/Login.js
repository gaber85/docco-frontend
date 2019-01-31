import React, { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles'


class Login extends Component {
  state = {

  }

  render () {





    return (
      <div className="login" css={styles.login} >
        <div className="welcome" css={styles.welcome}>
          <span className="title" css={styles.title}>Docco</span>
          <span className="phrase" css={styles.phrase}>Trust But Verify</span>
        </div>
        <div className="the-form" >
          <form onChange={this.handleChange} css={styles.form} >
            <input name="email" className="the-input first-name" css={styles.input} />
            <input name="password" className="the-input last-name" css={styles.input} />
          </form>
        </div>
      </div>)
  }




}

export default Login;