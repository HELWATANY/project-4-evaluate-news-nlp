function validateForm(formText) {
    let valid = true;
    let errorMassagesArr = [];
    let errorMsg = 'Please check the following errors';

    if (!formText) {
        valid = false;
        errorMassagesArr.push('Statement is required');
    }

    if (formText && formText.length < 20) {
        valid = false;
        errorMassagesArr.push('Statement must be more at least 20 characters.');
    }

    if (formText && formText.length > 280) {
        valid = false;
        errorMassagesArr.push('Statement must be more 280 characters or less.');
    }

    errorMassagesArr.forEach(msg => {
        errorMsg += `\n  - ${msg}`
    });

    return {
        valid,
        errorMsg
    }

}

export { validateForm }
