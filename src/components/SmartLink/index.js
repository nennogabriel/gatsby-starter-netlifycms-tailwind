import React from "react"

import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef(
  ({ to, className, activeClassName, children }, ref) => {
    const link = to || "/"
    return (
      <>
        {link.startsWith("#") ? (
          <a className={className} ref={ref} href={link}>
            {children}
          </a>
        ) : link.startsWith("http") ? (
          <OutboundLink
            className={className}
            ref={ref}
            href={link}
            target="_blank"
          >
            {children}
          </OutboundLink>
        ) : (
          <Link
            className={className}
            activeClassName={activeClassName || "active"}
            component={Link}
            ref={ref}
            to={link}
          >
            {children}
          </Link>
        )}
      </>
    )
  }
)

SmartLink.propTypes = {
  to: PropTypes.String,
}

SmartLink.defaultProps = {
  to: null,
}
export default SmartLink
