class stepperComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <form>
    <section class="step step__one step--active">
        <div class="step__content">
            <fieldset>
                <legend><span class="step__content__legend">Update Response</span></legend>
                <div class="input-group">
                    <input id="consent" type="radio" value="consent" name="update">
                    <label for="consent">I give my consent</label>
                </div>
                <div class="input-group">
                    <input id="no-consent" type="radio" value="no-consent" name="update">
                    <label for="no-consent">I do not give my consent</label>
                </div>
            </fieldset>
        </div>
    </section>
    <section class="step step__two step--disabled">
        <div class="step__content">
            <fieldset>
                <legend><span class="step__content__legend">Select a method</span></legend>
                <div class="input-group">
                    <input id="text" class="step__two__radio" type="radio" value="text verify" name="method">
                    <label for="text">Text message (SMS)</label>
                </div>
                <div class="input-group">
                    <input id="voice" class="step__two__radio" type="radio" value="voice-call verify" name="method">
                    <label for="voice">Voice call</label>
                </div>
                <div class="input-group">
                    <input id="email" class="step__two__radio" type="radio" value="email verify" name="method">
                    <label for="email">Email</label>
                </div>
            </fieldset>
            <button type="button" class="btn btn__send" disabled>Send code</button>
        </div>
    </section>
    <section class="step step__three step--disabled">
        <div class="step__content">
            <h1 class="step__content__legend">Enter code</h1>
            <input id="code" aria-label="Code" type="text" title="Only numbers are accepted" placeholder="Code"
                required="required">
            <span></span>
            <a href="#" target="_blank">Resend code</a>
        </div>
    </section>
    <button type="button" class="btn btn--large btn__verify" disabled>Verify</button>
</form>
    `;
    }
}

customElements.define('stepper-component', stepperComponent);
