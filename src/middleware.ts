export {default} from "next-auth/middleware"

/**
 * Only protected route is /agiler and its subroutes.
 */
export const config = {
    matcher: ["/agiler/:path*"],
}