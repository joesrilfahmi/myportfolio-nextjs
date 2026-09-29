/**
 * The Motion feature bundle. Kept in its own module so <LazyMotion> can
 * load it asynchronously, after first paint. `domMax` adds the layout
 * animations the navbar's active indicator needs.
 */
import { domMax } from "motion/react";

export default domMax;
