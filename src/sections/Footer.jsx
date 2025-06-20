import Section from '../components/Section';
import { socials } from '../constants';

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-neutral-gray300 lg:block">
                    © {new Date().getFullYear()}. All rights reserved. Coded by Yousef Magar.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="flex-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-neutral-gray500"
                        >
                            <img
                                src={item.iconUrl}
                                width={16}
                                height={16}
                                alt={item.title}
                            />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;
