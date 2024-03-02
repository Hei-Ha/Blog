'use client'

export default () => {
    
    return <div>
        test hugging face modal
        <gradio-app
            src="https://hei-ha-testspace.hf.space"
            initial_hieght={'500px'}
            container={false}
            theme_mode={'light'}
        />
    </div>
}