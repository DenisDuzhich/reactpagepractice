import { Bold } from "lucide-react";

export const ProjectInfo = () => {
  return (
    <section
      id="#hero"
      className="relative min-h-screen mt-18 flex flex-col items-center
      justify-center px-2 py-2"
    >
      <div
        className="container flex flex-col max-w-screen min-h-100
      mx-auto text-center gap-2 z-10"
      >
        <div className="box title">
          <h1>React сторінка Portfolio Creator</h1>
        </div>
        <div className="box description">
          <p>
            Опис проєкту:<br />
            За основу була взята сторінка-портфоліо.<br />
            <a
              style={{ color: "blue", fontWeight: "bold" }}
              href="https://www.figma.com/design/FMFODrqDfClG7GQGGd89qv/
              Portfolio-Creator?node-id=1-445&t=CrQchMxyVidVgGON-0"
            >
              Оригінал дизайну; 
            </a><br />
            <a
              style={{ color: "blue", fontWeight: "bold" }}
              href="https://github.com/DenisDuzhich/reactpagepractice"
            >
              Посилання на GitHub репо;
            </a>
          </p>
        </div>
        <div className="box workspace">
          <p>
            Робоча область:<br />
            Створено navbar, зроблено базову адаптивність для дизайну.<br />
            Додано інформацію про проєкт.<br />
            Додано рудиментарний footer, тільки текст.
          </p>
        </div>
        <div className="box author"> Виконав Дужич Денис </div>
      </div>
    </section>
  );
};
