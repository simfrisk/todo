import { CardStore } from "../store/CardStore";

export const WelcomeMessage = () => {

  const empty = CardStore((state) => state.isEmpty());

  if (!empty) return null;

  return (
    <section className="flex flex-col items-center justify-center mt-50 text-center">
      <h2 className="text-3xl font-semibold  primary-text mb-4">
        Welcome!
      </h2>
      <p className="primary-text mb-6 max-w-md">
        You have no tasks yet.
      </p>
    </section>
  );
};