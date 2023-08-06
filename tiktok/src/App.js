import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {

                        let Layout = DefaultLayout
                        if(route.layout){
                          Layout = route.layout
                        }
                        else if(route.layout === null){
                          Layout = Fragment
                        }
                        //Cái này phải khai báo để tạo ra 1 component chứ không thể truyền tực tiếp vào được
                        //Nhớ quy tắc đặt tên component phải viết hoa chữ cái đầu
                        const Page = route.component;
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
