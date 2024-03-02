'use client'
import React, { Component } from "react";


export default class GradioApp extends Component<any, any> {

    render() {
        return (
            <gradio-app
                className={ 'gradioApp' }
                style={ { width: '800px' } }
                src="https://hei-ha-testspace.hf.space"
                initial_hieght={ '500px' }
                container={ false }
                theme_mode={ 'light' }
            />
        )
    }
}