/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* gray-200 */
        ring: "var(--color-ring)", /* Deep professional trust */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* Deep professional trust */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* Growth and prosperity */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-100 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* Action and urgency */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-600 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          primary: {
            DEFAULT: "var(--color-brand-primary)", /* blue-600 */
            foreground: "var(--color-brand-primary-foreground)", /* white */
          },
          secondary: {
            DEFAULT: "var(--color-brand-secondary)", /* emerald-600 */
            foreground: "var(--color-brand-secondary-foreground)", /* white */
          },
          accent: {
            DEFAULT: "var(--color-brand-accent)", /* amber-500 */
            foreground: "var(--color-brand-accent-foreground)", /* gray-900 */
          },
        },
        text: {
          primary: "var(--color-text-primary)", /* slate-800 */
          secondary: "var(--color-text-secondary)", /* slate-600 */
          tertiary: "var(--color-text-tertiary)", /* slate-500 */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* slate-50 */
          foreground: "var(--color-surface-foreground)", /* slate-800 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-scale": "pulse-scale 3s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
      boxShadow: {
        'brand': '0 4px 12px rgba(27, 75, 115, 0.15)',
        'brand-lg': '0 10px 24px rgba(27, 75, 115, 0.2)',
      },
    },
  },
  plugins: [],
}