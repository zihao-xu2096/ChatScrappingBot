import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="wrapper"></div>
    <div className="footer">
      <div className="footer-content">
          <p className="footer-author">
            Developer: <span className="my-name"> Zihao(Harry) Xu</span>
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/xu-harry"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/HairyStats/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/zihao-xu2096"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="copyright">
            Copyright&nbsp;&copy;&nbsp;LiveStream Chat Analytics
          </p>
          <br />
        </div>
      </div>
  </footer>
  )
}
