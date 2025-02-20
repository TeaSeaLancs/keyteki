describe('Shattered Throne', function() {
    integration(function() {
        describe('Shattered Throne Ability', function() {
            beforeEach(function() {
                this.setupTest({
                    player1: {
                        amber: 3,
                        house: 'saurian',
                        hand: ['praefectus-ludo'],
                        inPlay: ['crassosaurus', 'odoac-the-patrician']
                    },
                    player2: {
                        amber: 3,
                        inPlay: ['silvertooth', 'gamgee', 'krump', 'troll', 'shattered-throne']
                    }
                });
            });

            it('should capture an amber after fight and survive', function() {
                this.player1.fightWith(this.crassosaurus, this.silvertooth);
                expect(this.crassosaurus.amber).toBe(1);
                expect(this.silvertooth.amber).toBe(0);
                expect(this.player2.amber).toBe(2);
            });

            it('should not capture amber after fight if it does not survive', function() {
                this.player1.play(this.praefectusLudo);
                this.player1.fightWith(this.odoacThePatrician, this.troll);
                expect(this.odoacThePatrician.hasToken('amber')).toBe(false);
                expect(this.player2.amber).toBe(3);
            });

            it('should capture an amber after fighting an elusive', function() {
                this.player1.fightWith(this.crassosaurus, this.gamgee);
                expect(this.crassosaurus.amber).toBe(1);
                expect(this.gamgee.amber).toBe(0);
                expect(this.player2.amber).toBe(2);
            });

            it('should also be applicable for opponent', function() {
                this.player1.endTurn();
                this.player2.clickPrompt('shadows');
                this.player2.fightWith(this.gamgee, this.crassosaurus);
                expect(this.gamgee.amber).toBe(1);
                expect(this.crassosaurus.amber).toBe(0);
                expect(this.player1.amber).toBe(2);
            });
        });
    });
});
