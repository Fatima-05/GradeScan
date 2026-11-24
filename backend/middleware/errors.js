export const notFound = (req, res) =>
  res.status(404).json({ error: { message: `Route not found: ${req.method} ${req.originalUrl}` } });

// Four parameters (err, req, res, next) marks this as error-handling middleware.
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    error: { message: status === 500 ? "Internal server error" : err.message },
  });
};
