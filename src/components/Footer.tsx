'use client';

import ArrowSvg from 'src/svg/ArrowSvg';

export default function Footer() {
  return (
    <section className="mt-auto mb-2 flex w-full flex-col flex-col-reverse justify-between gap-2 md:mt-8 md:mb-6 md:flex-row">
      <aside className="flex items-center pt-2 md:pt-0">
        <h3 className="mr-2 mb-2 text-m md:mb-0">
          Built with love by{' '}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            title="The Innovator Crew"
            className="font-semibold hover:text-indigo-600"
          >
            The Innovator Crew
          </a>
        </h3>
      </aside>
    </section>
  );
}
