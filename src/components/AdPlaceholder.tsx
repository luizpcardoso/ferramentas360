export function AdPlaceholder({ position }: { position?: string }) {
    return (
      <div className="text-center text-sm text-gray-400 italic my-6">
        [ espaço reservado para anúncios{position ? `: ${position}` : ""} ]
      </div>
    );
  }
  