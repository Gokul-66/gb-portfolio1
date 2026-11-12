import { PROFILE } from '../../data/content';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
};
