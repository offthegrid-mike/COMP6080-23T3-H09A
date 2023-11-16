import { render, screen } from '@testing-library/react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { shallow, configure } from 'enzyme'
import LoginForm from './LoginForm'

const noop = () => {}
configure({adapter: new Adapter()})

describe('LoginForm', () => {
    it('should have email input, password input and login button', () => {
        render(<LoginForm onSubmit={noop}/>)

        expect(screen.getByRole("textbox", {name: /email:/i})).toBeInTheDocument()
    })

    it('should have email input, password input and login button with shallow', () => {
        const wrapper = shallow(<LoginForm onSubmit={noop} />)
        const form = wrapper.find("form");
        expect(form).toHaveLength(1);
        const inputs = form.find("input");
        expect(inputs).toHaveLength(2);
        const email = inputs.find("#email");
        expect(email).not.toBeNull()
        const password = inputs.find("#password");
        expect(password).not.toBeNull()
    })

    it('should show email error message', () => {
        const errors = {
            email: 'wrong@email.com',
            password: 'wrong password'
        }
        const wrapper = shallow(<LoginForm onSubmit={noop} errors={errors}/>)
        const email = wrapper.find("#email");
        expect(email.prop('aria-invalid')).toBe("true");
        const password = wrapper.find("#password");
        expect(password.prop("aria-describedby")).toBe("login-password-error")

    })
})
