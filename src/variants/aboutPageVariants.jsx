export const ulVariants = {
    animate: {
        x: 0,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

export const iconVariants = {
    initial: {
        // rotate: -360,
    },
    animate: {
        rotate: 0,
        color: ["#FF5733", "#64d86b", '#CF9FFF'],
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.075, 0.82, 0.165, 1],
            repeat: Infinity,
            repeatType: "reverse",
            staggerChildren: 0.3

        }
    },
    hover: {
        scale: 2,
        x: -50
    }
}
