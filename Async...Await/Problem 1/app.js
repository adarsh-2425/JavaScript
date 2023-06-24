const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
    console.log(rejectionValue);
}

const reverseString = async (string) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return string.split('').reverse().join('');
}

reverseString('Compiler')
    .then(handleSuccess)
    .catch(handleFailure);
