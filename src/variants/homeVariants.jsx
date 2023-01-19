import { anticipate } from "framer-motion"

export const containerVariants = {
    initial: {
        y: -250,
        duration: 5
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            ease: anticipate,
            duration: 3,
            delayChildren: 10,
        },
    }
}

export const childVariants = {
    initial: {
        width: 0
    },
    animate: {
        width: 'auto',
        transition: {
            duration: 3,
        },
    },
}

export const headerVariants = {
    animate: {
        color: ["#FF5733", "#64d86b", '#CF9FFF'],
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.075, 0.82, 0.165, 1],
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
}

export const paragraphVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2.2
        },
    }
}


export const iconVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        color: 'inherit',
        opacity: 1,
        transition: {
            delay: 2.2
        }
    },
    whileHover: {
        scale: 1.3,
    }

}
