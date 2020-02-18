import React from "react"

import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef(
  ({ to, className, activeClassName, children }, ref) => {
    return (
      <>
        {to.startsWith("#") ? (
          <a className={className} ref={ref} href={to}>
            {children}
          </a>
        ) : to.startsWith("http") ? (
          <OutboundLink
            className={className}
            ref={ref}
            href={to}
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
            to={to}
          >
            {children}
          </Link>
        )}
      </>
    )
  }
)

SmartLink.propTypes = {
  to: PropTypes.string,
}

SmartLink.defaultProps = {
  to: "/",
}
export default SmartLink
