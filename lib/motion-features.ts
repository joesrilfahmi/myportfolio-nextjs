/**
 * The Motion feature bundle. Kept in its own module so <LazyMotion> can
 * load it asynchronously, after first paint. `domAnimation` covers
 * variants, in-view detection and exit animations: everything the site
 * uses, without the heavier layout engine.
 */
import { domAnimation } from "motion/react";

export default domAnimation;
