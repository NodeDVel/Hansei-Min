const onError = (err, req, res, next) => {
    if (err) {
      const ErrorCode = err.name;
      const ErrorMessage = err.message;
  
      console.log(`${ErrorCode}  ${ErrorMessage}`);
  
      res.status(ErrorCode).send({
        success: false,
        message: ErrorMessage,
        code: ErrorCode
      });
    } else {
      next();
    }
  };
  
  module.exports = onError;
  