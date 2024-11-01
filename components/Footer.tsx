interface FooterProps {}
const Footer = ({}) => {
  return (
    <footer className="bg-[#2e261e] shadow-lg text-center py-4 text-sm text-gray-300">
      &copy; {new Date().getFullYear()} Servitium Altaris. Todos os direitos
      reservados.
    </footer>
  );
};
export default Footer;
