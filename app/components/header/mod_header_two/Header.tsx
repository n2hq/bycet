// app/components/Header.tsx
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';

interface DropdownMenuProps {
    title: string;
    children: ReactNode;
}

interface DropdownItemProps {
    href: string;
    children: ReactNode;
}

interface MobileDropdownProps {
    title: string;
    children: ReactNode;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">D</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Dascy</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <DropdownMenu title="Services">
                            <DropdownItem href="/services/software-development">
                                Custom Software Development
                            </DropdownItem>
                            <DropdownItem href="/services/ui-ux-design">
                                UI/UX Design & Prototyping
                            </DropdownItem>
                            <DropdownItem href="/services/digital-transformation">
                                Digital Transformation
                            </DropdownItem>
                            <DropdownItem href="/services/workflow-automation">
                                Workflow Automation
                            </DropdownItem>
                            <DropdownItem href="/services/consulting">
                                Technology Consulting
                            </DropdownItem>
                        </DropdownMenu>

                        <DropdownMenu title="Industries">
                            <DropdownItem href="/industries/automotive">
                                Automotive
                            </DropdownItem>
                            <DropdownItem href="/industries/retail">
                                Consumer, Retail & Leisure
                            </DropdownItem>
                            <DropdownItem href="/industries/energy">
                                Energy & Natural Resources
                            </DropdownItem>
                            <DropdownItem href="/industries/financial">
                                Financial Services
                            </DropdownItem>
                            <DropdownItem href="/industries/manufacturing">
                                Manufacturing
                            </DropdownItem>
                            <DropdownItem href="/industries/technology">
                                Technology, Media & Telecom
                            </DropdownItem>
                        </DropdownMenu>

                        <DropdownMenu title="Work">
                            <DropdownItem href="/work/our-process">
                                Our Process
                            </DropdownItem>
                            <DropdownItem href="/work/case-studies">
                                Case Studies
                            </DropdownItem>
                            <DropdownItem href="/work/technologies">
                                Technologies
                            </DropdownItem>
                        </DropdownMenu>

                        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Insights
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/get-started"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Start Your Project
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <div className="w-6 flex flex-col space-y-1">
                            <span className={`h-0.5 w-full bg-gray-600 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-gray-600 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-gray-600 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        <MobileMenu />
                    </div>
                )}
            </nav>
        </header>
    );
}

// Dropdown Component
function DropdownMenu({ title, children }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                    {children}
                </div>
            )}
        </div>
    );
}

function DropdownItem({ href, children }: DropdownItemProps) {
    return (
        <Link
            to={href}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
            {children}
        </Link>
    );
}

// Mobile Menu Component
function MobileMenu() {
    return (
        <div className="space-y-4">
            <MobileDropdown title="Services">
                <Link to="/services/software-development" className="block py-2 px-4 text-gray-600">
                    Custom Software Development
                </Link>
                <Link to="/services/ui-ux-design" className="block py-2 px-4 text-gray-600">
                    UI/UX Design & Prototyping
                </Link>
                <Link to="/services/digital-transformation" className="block py-2 px-4 text-gray-600">
                    Digital Transformation
                </Link>
                <Link to="/services/workflow-automation" className="block py-2 px-4 text-gray-600">
                    Workflow Automation
                </Link>
                <Link to="/services/consulting" className="block py-2 px-4 text-gray-600">
                    Technology Consulting
                </Link>
            </MobileDropdown>

            <MobileDropdown title="Industries">
                <Link to="/industries/automotive" className="block py-2 px-4 text-gray-600">
                    Automotive
                </Link>
                <Link to="/industries/retail" className="block py-2 px-4 text-gray-600">
                    Consumer, Retail & Leisure
                </Link>
                <Link to="/industries/energy" className="block py-2 px-4 text-gray-600">
                    Energy & Natural Resources
                </Link>
                <Link to="/industries/financial" className="block py-2 px-4 text-gray-600">
                    Financial Services
                </Link>
                <Link to="/industries/manufacturing" className="block py-2 px-4 text-gray-600">
                    Manufacturing
                </Link>
                <Link to="/industries/technology" className="block py-2 px-4 text-gray-600">
                    Technology, Media & Telecom
                </Link>
            </MobileDropdown>

            <Link to="/work/our-process" className="block text-gray-700 hover:text-blue-600 py-2">
                Our Work
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 py-2">
                About
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-blue-600 py-2">
                Insights
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 py-2">
                Contact
            </Link>

            <div className="pt-4">
                <Link
                    to="/get-started"
                    className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                    Start Your Project
                </Link>
            </div>
        </div>
    );
}

function MobileDropdown({ title, children }: MobileDropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                className="flex justify-between items-center w-full text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pl-4 border-l-2 border-gray-200 ml-2">
                    {children}
                </div>
            )}
        </div>
    );
}