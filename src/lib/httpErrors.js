export const HTTP_ERROR_CODES = [403, 404, 500, 502, 503, 504];

export const HTTP_ERRORS = {
  403: {
    title: 'Access denied',
    headline: 'You do not have permission to view this page.',
    description:
      'The server understood your request but refused to authorize it. If you believe this is a mistake, contact us and we can help.',
  },
  404: {
    title: 'Page not found',
    headline: 'We could not find the page you were looking for.',
    description:
      'The link may be outdated, or the page may have moved. Try returning home or exploring our live demos.',
  },
  500: {
    title: 'Internal server error',
    headline: 'Something went wrong on our end.',
    description:
      'We are working to fix the issue. Please try again in a few minutes, or head back to the home page.',
  },
  502: {
    title: 'Bad gateway',
    headline: 'We received an invalid response from an upstream server.',
    description:
      'This is usually temporary. Wait a moment and refresh the page, or return home while we restore the connection.',
  },
  503: {
    title: 'Service unavailable',
    headline: 'The site is temporarily unavailable.',
    description:
      'We may be performing maintenance or handling high traffic. Please try again shortly.',
  },
  504: {
    title: 'Gateway timeout',
    headline: 'The server took too long to respond.',
    description:
      'Your connection is fine, but our upstream service did not reply in time. Refresh the page or try again later.',
  },
};

export function getHttpError(code) {
  const parsed = Number(code);
  if (HTTP_ERRORS[parsed]) {
    return { code: parsed, ...HTTP_ERRORS[parsed] };
  }
  return { code: 404, ...HTTP_ERRORS[404] };
}
