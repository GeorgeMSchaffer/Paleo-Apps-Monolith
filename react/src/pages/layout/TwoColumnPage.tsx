//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IntervalFilter, PhylumFilter } from '../../components/filters';
export interface ITwoColumnPageProps {
    leftColumn: React.ReactNode;
    rightColumn: React.ReactNode
}
export function TwoColumnPage(props:ITwoColumnPageProps){
    const {leftColumn, rightColumn} = props
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="flex">
                <div className="flex-auto">
                    <header className="bg-primary text-white text-center py-3">
                        <h1>Header</h1>
                        <div className="flex flex-row">

                        </div>
                        <Link to="/intervals">Intervals</Link>
                        <Link to="/occurrences">Occurrences</Link>
                        <Link to="/diversity">Diversity</Link>
                        <Link to="/species">Species</Link>
                        
                    </header>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-auto flex-column">
                <div className="">
                    <aside className="">
                        <h2>Left Column</h2>
                        <p>Content for the left column goes here.</p>
                        
                        <IntervalFilter/>
                        <PhylumFilter/>
                        {leftColumn}
                    </aside>
                </div>
                <div className="">
                    <main className="">
                        <h2>Right Column</h2>
                        <p>Content for the right column goes here.</p>
                        {rightColumn}
                    </main>
                </div>
            </div>

            {/* Footer */}
            <div className="row">
                <div className="col-12">
                    <footer className="bg-secondary text-white text-center py-3">
                        <p>Footer</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnPage;